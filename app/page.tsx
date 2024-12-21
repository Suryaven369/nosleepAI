import { Button } from "@/components/ui/button"
import { Skull } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Skull className="h-6 w-6 text-red-600" />
            <span className="text-xl font-bold">NoSleep AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button variant="default" className="bg-red-600 hover:bg-red-700">Sign Up</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
          Generate Spine-Chilling Stories
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Unleash the power of AI to create haunting tales worthy of r/nosleep. 
          Craft unique horror stories that will keep your readers awake at night.
        </p>
        <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
          Start Writing Horror
        </Button>
      </section>

      {/* Features Section */}
      <section className="bg-card py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features that Terrify</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-4">AI-Powered Horror</h3>
              <p className="text-muted-foreground">
                State-of-the-art AI trained on thousands of horror stories to generate unique, bone-chilling narratives.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-4">Customizable Themes</h3>
              <p className="text-muted-foreground">
                Choose from various horror themes and control the intensity of your story's horror elements.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-4">Real-time Generation</h3>
              <p className="text-muted-foreground">
                Watch your horror story unfold in real-time with our streaming response system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Story Preview */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Sample Story</h2>
        <div className="max-w-2xl mx-auto p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-4">The Midnight Visitor</h3>
          <p className="text-muted-foreground mb-4">
            I never believed in supernatural entities until that fateful night. The scratching at my window started precisely at 3 AM...
          </p>
          <Button variant="outline" className="w-full">Read Full Story</Button>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-card py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Fear</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border bg-background">
              <h3 className="text-xl font-semibold mb-4">Free</h3>
              <p className="text-3xl font-bold mb-4">$0<span className="text-base font-normal">/month</span></p>
              <ul className="space-y-2 mb-6">
                <li>3 stories per month</li>
                <li>Basic themes</li>
                <li>Community support</li>
              </ul>
              <Button variant="outline" className="w-full">Get Started</Button>
            </div>
            <div className="p-6 rounded-lg border bg-background relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm">
                Popular
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium</h3>
              <p className="text-3xl font-bold mb-4">$9.99<span className="text-base font-normal">/month</span></p>
              <ul className="space-y-2 mb-6">
                <li>Unlimited stories</li>
                <li>All themes</li>
                <li>Priority support</li>
                <li>Advanced customization</li>
              </ul>
              <Button className="w-full bg-red-600 hover:bg-red-700">Choose Premium</Button>
            </div>
            <div className="p-6 rounded-lg border bg-background">
              <h3 className="text-xl font-semibold mb-4">Professional</h3>
              <p className="text-3xl font-bold mb-4">$24.99<span className="text-base font-normal">/month</span></p>
              <ul className="space-y-2 mb-6">
                <li>Everything in Premium</li>
                <li>API access</li>
                <li>Custom themes</li>
                <li>Dedicated support</li>
              </ul>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">NoSleep AI</h4>
              <p className="text-sm text-muted-foreground">
                Creating the next generation of horror stories with artificial intelligence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Features</li>
                <li>Pricing</li>
                <li>API</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 NoSleep AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}