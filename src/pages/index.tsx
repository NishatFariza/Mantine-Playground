import Head from 'next/head'
import Image from 'next/image'
import { NavbarMinimal } from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { Button } from "@mantine/core";

export default function Home() {
  return (
    <div>
      <NavbarMinimal />

      <div className="flex gap-4">
        <h1>Hello</h1>
        <Button variant="gradient" gradient={{ from: "indigo", to: "cyan" }}>
          Indigo cyan
        </Button>
        <Button
          variant="gradient"
          gradient={{ from: "teal", to: "lime", deg: 105 }}
        >
          Lime green
        </Button>
        <Button
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
        >
          Teal blue
        </Button>
        <Button variant="gradient" gradient={{ from: "orange", to: "red" }}>
          Orange red
        </Button>
        <Button
          variant="gradient"
          gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
        >
          Peach
        </Button>
      </div>
    </div>
  );
}
