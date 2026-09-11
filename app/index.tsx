import FipeScreen from "@/components/FipeScreen";
import { useRouter } from "expo-router";

export default function Index() {

  const router = useRouter();

  const data = [
    { title: "Um" },
    { title: "Dois" },
    { title: "Três" },
    { title: "Quatro" },
    { title: "Cinco" },
  ];

  return <FipeScreen data={data}/>
}
