import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Profiles {
  id: string;
  name: string;
  avatar: string;
}

const useProfiles = () =>
  useQuery<Profiles[], Error>({
    queryKey: ["Profiles"],
    queryFn: () =>
      axios
        .get("https://662fe82243b6a7dce31127f2.mockapi.io/profile/id/profiles")
        .then((res) => res.data),
  });

export default useProfiles;
