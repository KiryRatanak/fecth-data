import LoadingCard from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <nav>
        <Card>
          <h1>Home Pages</h1>
          <h1>ជ័យវរ្ម័នទី៧ Voroman VII</h1>
          <Button variant="outline">Button</Button>
          <Button variant="outline" size="icon" aria-label="Submit">
            <ArrowUpIcon />
          </Button>
        </Card>
        <LoadingCard/>
      </nav>
    </>

  );
}