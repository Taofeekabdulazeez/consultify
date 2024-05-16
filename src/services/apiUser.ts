import supabase from "./supabase";

type Details = {
  email: string;
  password: string;
};

export async function signup({ email, password }: Details) {
  console.log(email, password);
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log("User=>", data.user);
    console.log("Session=>", data.session);
    if (error) {
      console.log("Error=>");
      throw new Error("An Error occur!");
    }
    return data;
  } catch (error) {
    console.error("error=>", error);
  }
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}
