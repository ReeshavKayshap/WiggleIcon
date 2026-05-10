import Container from "@/components/Container";
import { Herosection } from "@/components/ui/Herosection";
import { Nav } from "@/components/ui/Nav";
import { SearchBar } from "@/components/ui/SearchBar";

export default function Home() {
  return (
    <Container className="pt-5">
      <Nav />
      <Herosection />
      <SearchBar />
    </Container>
  );
}
