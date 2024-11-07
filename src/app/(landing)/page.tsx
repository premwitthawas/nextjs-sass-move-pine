import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ShinyButton } from "@/components/shiny-button";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="relative py-24 sm:py bg-brand-25">
        <MaxWidthWrapper>
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading>
                <span>Real-Time SaaS Insights,</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">Delivered to Your Discord</span>
              </Heading>
            </div>

            <p className="text-base/7">
              MovePine is easiest way monitor your SaaS. Get
              instant
              notifications for {" "}
              <span className="font-semibold text-gray-700">sales, new users, or any other event</span>{" "}sent
              directly to your Discord.
            </p>

            <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start">
              {['Real-time Discord alerts for critical events', 'Buy once, use forever', 'Track sales, new users, or any other event'].map((item, idx) => {
                return <li key={idx} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-brand-700" />
                  {item}
                </li>
              })}
            </ul>

            <div className="w-full max-w-80">
              <ShinyButton href="/sign-up" className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-lg">
                Start For Free Today
              </ShinyButton>
            </div>

          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
