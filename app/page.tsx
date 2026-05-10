"use client";

import { useState } from "react";
import Container from "@/components/Container";
import { Landing } from "@/components/ui/Landing";
import { Nav } from "@/components/ui/Nav";
import { IconShowcase } from "@/components/ui/IconShowcase";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Container className="pt-5">
      <Nav />
      <Landing setSearchQuery={setSearchQuery} />
      <IconShowcase searchQuery={searchQuery} />
    </Container>
  );
}
