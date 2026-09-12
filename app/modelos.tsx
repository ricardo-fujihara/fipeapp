import FipeScreen from "@/components/FipeScreen";
import { DetalheMarca } from "@/modelos";
import { fetcher } from "@/services/fetcher";
import { useLocalSearchParams, useRouter } from "expo-router";
import useSWR from "swr";

export default function Modelos() {
  const router = useRouter();

  const { codigoMarca } = useLocalSearchParams();

  const { data, error, isLoading, mutate } = useSWR<DetalheMarca>(
    //"/carros/marcas" + codigoMarca + "/modelos",
    `/carros/marcas/${codigoMarca}/modelos`,
    fetcher,
    {
      dedupingInterval: 60_000,
    },
  );

  const goNext = (codigo: string) => {
    console.log("Codigo: ", codigo);
    // proxima tela
    router.navigate({
      pathname: "/anos",
      params: { codigoMarca: codigoMarca, codigoModelo: codigo },
    });
  };

  return (
    <FipeScreen
      data={data?.modelos}
      goNext={goNext}
      error={error}
      isLoading={isLoading}
      update={mutate}
    />
  );
}
