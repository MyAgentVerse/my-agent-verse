import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import teamImage from "@/assets/ai-team-avatars.jpg";

const SolutionSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            You don't need more people in the office. You need reliable backup.
          </h2>
          <p className="mb-12 text-center text-xl text-muted-foreground">
            Meet your 24/7 AI team — built by MyAgentVerse.
          </p>

          <div className="mb-16 overflow-hidden rounded-2xl">
            <img 
              src={teamImage} 
              alt="AI team avatars - Ava, Jack, and Sofia" 
              className="w-full"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Ava — Front-Desk Hero</CardTitle>
                <CardDescription>Calm. Quick. Always on.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Answers calls, texts, and web leads instantly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Responds to ad leads before anyone else.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Books jobs right into your calendar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Covers after-hours and weekends so your team can breathe.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Jack — Follow-Up Closer</CardTitle>
                <CardDescription>Friendly. Persistent. Reliable.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Follows up on quotes and unbooked leads.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Re-engages website and Facebook inquiries.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Keeps techs busy and schedules full.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sofia — Operations Brain</CardTitle>
                <CardDescription>Organized. Steady. Detail-driven.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Confirms and reschedules jobs automatically.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Sends reminders and thank-you texts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Collects reviews and sends daily summaries.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <p className="mt-12 text-center text-xl font-medium">
            Together, they protect your time and capture every dollar your shop earns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
