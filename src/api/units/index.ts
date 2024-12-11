import { supabase } from "../client";

export const fetchUnits = async () => {
  const { data, error } = await supabase.from("units").select("id, name");

  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
};

export const fetchUnit = async (id: number) => {
  const { data, error } = await supabase
    .from("units")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log("error", error);
    return null;
  } else {
    return data;
  }
};
