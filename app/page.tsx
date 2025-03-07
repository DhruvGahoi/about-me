"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Mail, Linkedin, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import AnimatedText from "./components/animated"
import ParallaxSection from "./components/parallax"
import { useTheme } from "next-themes"

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = ["JavaScript", "React", "Next.js", "TypeScript", "Node.js", "C/C++", "Tailwind"]

  return (
    <main className="relative min-h-screen overflow-hidden">
      <header className="absolute top-4 right-4">
        {mounted && (
          <Button
            className="cursor-pointer p-2 rounded-full"
            variant="outline"
            onClick={() => {
              const newTheme = theme === 'dark' ? 'light' : 'dark';
              console.log('Changing theme to:', newTheme);
              setTheme(newTheme);
            }}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        )}
      </header>
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background to-background before:absolute before:inset-0 before:bg-[radial-gradient(circle_800px_at_100px_100px,rgba(139,92,246,0.15),transparent_80%)] after:absolute after:inset-0 after:bg-[radial-gradient(circle_800px_at_right_bottom,rgba(192,132,252,0.15),transparent_80%)] before:animate-pulse after:animate-pulse"></div>

      <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <AnimatedText text="Hello, I'm droovvv(Dhruv)" />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              <AnimatedText text="developer" delay={0.5} />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-4 justify-center mt-8"
          >
            <a href="https://github.com/DhruvvGahoi" target="_blank" rel="noopener noreferrer">
              <Button className="cursor-pointer" variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>

            <a href="https://www.linkedin.com/in/dhruv-gahoi/" target="_blank" rel="noopener noreferrer">
              <Button className="cursor-pointer" variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>

            <a href="mailto:dhruvgahoi11111@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button className="cursor-pointer" variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </a>

          </motion.div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/5 backdrop-blur-sm"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${scrollY * (0.1 + Math.random() * 0.2)}px)`,
                transition: "transform 0.1s linear",
                opacity: 0.7,
              }}
            />
          ))}
        </div>
      </section>

      <ParallaxSection>
        <div className="max-w-4xl mx-auto px-4 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
            <a href="https://droov-sh.vercel.app/" target="_blank" rel="noopener noreferrer" className="relative z-10 text-blue-500 underline hover:text-blue-700 transition-colors duration-200">
              About Me
            </a>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-primary/30 -z-10"></span>
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed py-2 text-center">
              My name is <span className="font-semibold">Dhruv</span>. I am <span className="font-semibold">20</span>, and I&apos;m a full-stack web developer with a little grip over Data Structures and Algorithms. I mean, it&apos;s for fun, I guess... 😆
              <br />
              <br />
              I love coding in <span className="text-primary">JavaScript, TypeScript, and C/C++</span>, and have worked with frameworks like <span className="text-primary">ReactJS, NextJS, ExpressJS, and MongoDB</span>.  
              <br />
              <br />
              I am currently learning <span className="font-semibold text-blue-500">DevOps</span>—if you can help me with any of these, do let me know! 🚀
            </p>

            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              When I&apos;m not coding, you can find me over &nbsp;
              <a 
                href="https://x.com/DhruvvGahoi" 
                className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
                target="_blank" 
                rel="noopener noreferrer"
              >
                here
              </a>.
            </p>
          </div>
        </div>
      </ParallaxSection>

      <section className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <AnimatedText text="Skills" />
          </h2>

          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Badge
                  className="text-lg py-2 px-4 hover:scale-110 transition-transform cursor-default"
                  variant="secondary"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      <footer className="py-8 px-4 border-t">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} All rights reserved :)</p>
        </div>
      </footer>
    </main>
  )
}

