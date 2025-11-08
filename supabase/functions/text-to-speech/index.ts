import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { text, voice = 'alloy' } = await req.json();

    if (!text) {
      throw new Error('Text is required');
    }

    const ELEVENLABS_API_KEY = Deno.env.get('ELEVENLABS_API_KEY');
    
    if (ELEVENLABS_API_KEY) {
      // Use ElevenLabs if API key is available
      console.log('Using ElevenLabs for TTS');
      
      // Map voice names to ElevenLabs voice IDs
      const voiceMap: Record<string, string> = {
        'alloy': '9BWtsMINqrJLrRacOk9x', // Aria
        'echo': 'onwK4e9ZLuTAKqWW03F9', // Daniel
        'shimmer': 'pFZP5JQG7iQjIQuC4Bku', // Lily
      };
      
      const voiceId = voiceMap[voice] || voiceMap['alloy'];

      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
        method: 'POST',
        headers: {
          'xi-api-key': ELEVENLABS_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          model_id: 'eleven_turbo_v2_5',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
          }
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error('ElevenLabs API error:', error);
        throw new Error(`ElevenLabs API error: ${error}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      const base64Audio = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

      return new Response(
        JSON.stringify({ audioContent: base64Audio }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } else {
      // Fallback to OpenAI if ElevenLabs is not configured
      console.log('Using OpenAI for TTS (fallback)');
      
      const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
      if (!OPENAI_API_KEY) {
        throw new Error('No TTS API keys configured');
      }

      const response = await fetch('https://api.openai.com/v1/audio/speech', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'tts-1',
          input: text,
          voice: voice || 'alloy',
          response_format: 'mp3',
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error('OpenAI API error:', error);
        throw new Error(`OpenAI API error: ${error}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      const base64Audio = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

      return new Response(
        JSON.stringify({ audioContent: base64Audio }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Error in text-to-speech:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
