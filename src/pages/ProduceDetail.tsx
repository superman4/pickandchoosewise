
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Info, Thermometer, MoveVertical, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProduceDetailBySlug } from "@/utils/produceData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProduceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const produce = slug ? getProduceDetailBySlug(slug) : undefined;

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [slug]);

  if (!produce) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="heading-2 mb-6">Produce Not Found</h1>
        <p className="text-muted-foreground mb-8">
          We couldn't find the produce item you're looking for.
        </p>
        <Button asChild>
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    );
  }

  // Format season names to be capitalized
  const formatSeasons = (seasons: string[]) => {
    return seasons
      .map(season => season.charAt(0).toUpperCase() + season.slice(1))
      .join(", ");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back navigation */}
      <div className="bg-muted border-b border-border">
        <div className="container-custom py-3">
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground">
            <Link to="/" className="flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="container-custom py-8">
        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <Badge variant="outline" className="capitalize">{produce.category}</Badge>
            <Badge className="badge-ripe">
              {produce.difficulty === 'easy' && 'Easy to Pick'}
              {produce.difficulty === 'medium' && 'Moderate'}
              {produce.difficulty === 'hard' && 'Challenging'}
            </Badge>
            <Badge variant="outline">In Season: {formatSeasons(produce.seasons)}</Badge>
          </div>
          <h1 className="heading-1">{produce.name}</h1>
        </header>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Images */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-lg overflow-hidden border border-border">
                <img
                  src={produce.images.main}
                  alt={produce.name}
                  className="w-full aspect-square object-cover"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-md overflow-hidden border border-leaf-200 bg-leaf-50">
                  <div className="bg-leaf-100 px-2 py-1 text-center">
                    <span className="text-xs font-medium text-leaf-800">Ripe</span>
                  </div>
                  <img
                    src={produce.images.ripe}
                    alt={`Ripe ${produce.name}`}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <div className="rounded-md overflow-hidden border border-carrot-200 bg-carrot-50">
                  <div className="bg-carrot-100 px-2 py-1 text-center">
                    <span className="text-xs font-medium text-carrot-800">Underripe</span>
                  </div>
                  <img
                    src={produce.images.underripe}
                    alt={`Underripe ${produce.name}`}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <div className="rounded-md overflow-hidden border border-berry-200 bg-berry-50">
                  <div className="bg-berry-100 px-2 py-1 text-center">
                    <span className="text-xs font-medium text-berry-800">Overripe</span>
                  </div>
                  <img
                    src={produce.images.overripe}
                    alt={`Overripe ${produce.name}`}
                    className="w-full aspect-square object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Information */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="selection">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="selection" className="flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  <span>Selection Guide</span>
                </TabsTrigger>
                <TabsTrigger value="ripening" className="flex items-center gap-2">
                  <Thermometer className="h-4 w-4" />
                  <span>Ripening & Storage</span>
                </TabsTrigger>
                <TabsTrigger value="nutrition" className="flex items-center gap-2">
                  <HeartHandshake className="h-4 w-4" />
                  <span>Nutrition & Uses</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="selection" className="pt-8">
                <h2 className="heading-3 mb-6">Selection Checklist</h2>
                
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Visual cues */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-muted rounded-full p-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                        </div>
                        <h3 className="font-semibold text-lg">Visual Cues</h3>
                      </div>
                      <ul className="list-disc pl-6 space-y-2">
                        {produce.selectionCriteria.visual.map((cue, index) => (
                          <li key={index} className="text-muted-foreground">{cue}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Touch test */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-muted rounded-full p-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>
                        </div>
                        <h3 className="font-semibold text-lg">Touch Test</h3>
                      </div>
                      <ul className="list-disc pl-6 space-y-2">
                        {produce.selectionCriteria.touch.map((cue, index) => (
                          <li key={index} className="text-muted-foreground">{cue}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Smell cues */}
                  {produce.selectionCriteria.smell.length > 0 && (
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-muted rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22 17 7"/><path d="M13 11v9"/><path d="M9 15v5"/><path d="M17 7a5 5 0 0 0-5-5"/><path d="M4 20a5 5 0 0 0 5 5"/></svg>
                          </div>
                          <h3 className="font-semibold text-lg">Smell Test</h3>
                        </div>
                        <ul className="list-disc pl-6 space-y-2">
                          {produce.selectionCriteria.smell.map((cue, index) => (
                            <li key={index} className="text-muted-foreground">{cue}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}

                  {/* Sound indicators */}
                  {produce.selectionCriteria.sound.length > 0 && (
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-muted rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                          </div>
                          <h3 className="font-semibold text-lg">Sound Test</h3>
                        </div>
                        <ul className="list-disc pl-6 space-y-2">
                          {produce.selectionCriteria.sound.map((cue, index) => (
                            <li key={index} className="text-muted-foreground">{cue}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Common issues */}
                <div className="mt-8">
                  <h3 className="heading-4 mb-4">Common Issues to Avoid</h3>
                  <Card className="bg-berry-50 border-berry-200">
                    <CardContent className="pt-6">
                      <ul className="list-disc pl-6 space-y-2">
                        {produce.commonIssues.map((issue, index) => (
                          <li key={index} className="text-berry-800">{issue}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="ripening" className="pt-8">
                <h2 className="heading-3 mb-6">Ripening & Storage</h2>
                
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Speed up ripening */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-carrot-100 text-carrot-800 rounded-full p-2">
                          <MoveVertical className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold text-lg">Speed Up Ripening</h3>
                      </div>
                      <ul className="list-disc pl-6 space-y-2">
                        {produce.ripeningTips.speedUp.map((tip, index) => (
                          <li key={index} className="text-muted-foreground">{tip}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Slow down ripening */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-leaf-100 text-leaf-800 rounded-full p-2">
                          <MoveVertical className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold text-lg">Slow Down Ripening</h3>
                      </div>
                      <ul className="list-disc pl-6 space-y-2">
                        {produce.ripeningTips.slowDown.map((tip, index) => (
                          <li key={index} className="text-muted-foreground">{tip}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Storage recommendations */}
                <div className="mt-8">
                  <h3 className="heading-4 mb-4">Storage Recommendations</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="list-disc pl-6 space-y-2">
                        {produce.storage.map((tip, index) => (
                          <li key={index} className="text-muted-foreground">{tip}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="nutrition" className="pt-8">
                <h2 className="heading-3 mb-6">Nutrition & Uses</h2>
                
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Nutritional highlights */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-leaf-100 text-leaf-800 rounded-full p-2">
                          <HeartHandshake className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold text-lg">Nutritional Highlights</h3>
                      </div>
                      <ul className="list-disc pl-6 space-y-2">
                        {produce.nutrition.map((item, index) => (
                          <li key={index} className="text-muted-foreground">{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Related items */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-muted rounded-full p-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 16h6"/><path d="M19 13v6"/><circle cx="6" cy="19" r="3"/><path d="M10 19h2"/><circle cx="14" cy="7" r="3"/><path d="M18 7h2"/><circle cx="6" cy="7" r="3"/><path d="M10 7h1"/></svg>
                        </div>
                        <h3 className="font-semibold text-lg">Pairs Well With</h3>
                      </div>
                      <ul className="list-disc pl-6 space-y-2">
                        {produce.relatedItems.map((item, index) => (
                          <li key={index} className="text-muted-foreground capitalize">{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProduceDetail;
