import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { AccordionDemo } from "@/components/accordion-demo"
import { DrawerDemo } from "@/components/drawer-demo"
import Component from "@/components/landing"

export default function IndexPage() {
  return (
    <>
      {/* <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-6xl">
            Acessibilidade para pessoas neuroatípicas:
            <br className="hidden sm:inline" />
            As divergências do Autismo e TDAH.
          </h1>
          <p className="max-w-[700px] text-2xl text-muted-foreground">
            As dificuldades diárias de um cérebro neurodivergente Autista e TDAH
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Documentação
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </Link>
        </div>
      </section> */}
      <Component />
    </>
  )
}
