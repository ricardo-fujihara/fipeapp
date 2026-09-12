import FipeScreen from "@/components/FipeScreen";
import { Anos } from "@/modelos";
import { fetcher } from "@/services/fetcher";
import { useLocalSearchParams, useRouter } from "expo-router";
import useSWR from "swr";

export default function Anos() {
  const router = useRouter();

  const { codigoMarca, codigoModelo } = useLocalSearchParams();

  const { data, error, isLoading, mutate } = useSWR<Anos[]>(
    //"/carros/marcas" + codigoMarca + "/modelos",
    `/carros/marcas/${codigoMarca}/modelos/${codigoModelo}/anos`,
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
      data={data}
      goNext={goNext}
      error={error}
      isLoading={isLoading}
      update={mutate}
    />
  );
}
