import { ReactElement } from "react";
import processDirectory from "@/utils/processDirectory";

export default function Home(): ReactElement {
  return <processDirectory.HelloWorld.component />;
}
