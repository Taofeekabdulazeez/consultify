import supabase from "./supabase";

export async function getUserData(userId: string) {
  const { data: user, error } = await supabase
    .from("experts")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw new Error(error.message);

  return user;
}
