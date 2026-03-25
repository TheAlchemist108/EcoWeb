import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe2, Leaf, University, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Treasure() {
  return (
    <main className="min-h-screen bg-background pt-8 pb-16">
      <div className="container space-y-16">
        
        {/* Header Section */}
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-900">
            Eco Treasures
          </h1>
          <p className="text-lg text-emerald-800/80">
            Discover a collection of global sustainability milestones, tools, and initiatives driving the ecological transition.
          </p>
        </section>

        {/* Global Cambridge Section */}
        <section id="global-cambridge" className="relative py-12">
          {/* Decorative background styling */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-emerald-500/10 via-emerald-300/5 to-amber-200/10 rounded-3xl" />
          <div className="absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]">
             <div className="h-full w-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
              <div className="flex-1 space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-700/10 text-emerald-700 mb-2">
                  <University className="h-6 w-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-emerald-950">
                  Global Cambridge
                </h2>
                <p className="text-lg text-emerald-800/90 leading-relaxed">
                  The Global Cambridge initiative represents a monumental step forward in collaborative, international sustainability research and practice. By bridging ancient academic traditions with cutting-edge environmental technology, Cambridge is taking a leading role in global ecological stewardship.
                </p>
                <div className="pt-4 flex gap-4 flex-wrap">
                  <Button variant="default" className="bg-emerald-700 hover:bg-emerald-800 text-white shadow-md">
                    Explore Partners
                  </Button>
                  <Button variant="outline" className="border-emerald-700/20 text-emerald-800 hover:bg-emerald-50">
                    Read the 2030 Vision
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-emerald-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/20 to-emerald-900/60 mix-blend-multiply" />
                <img 
                  src="https://images.unsplash.com/photo-1590089855589-9a25b1b702ec?auto=format&fit=crop&q=80" 
                  alt="Cambridge Architecture and Greenery" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mt-8">
              <Card className="border-emerald-800/10 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <Globe2 className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle className="text-xl text-emerald-950">Worldwide Research Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-emerald-800/80">
                    Connecting leading climate scientists and environmental NGOs to share data, resources, and actionable insights.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-emerald-800/10 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <Leaf className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle className="text-xl text-emerald-950">Climate Resilience</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-emerald-800/80">
                    Implementing urban forestry, biodiversity preservation, and adaptive coastal management frameworks globally.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-emerald-800/10 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <Zap className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle className="text-xl text-emerald-950">Net-Zero Innovations</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-emerald-800/80">
                    Funding green tech startups and piloting localized clean energy grids to eliminate carbon footprints.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
      </div>
    </main>
  );
}
