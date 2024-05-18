/* eslint-disable @typescript-eslint/no-explicit-any */
import supabase from "./supabase";

export async function createStore(userData: any) {
  const { data, error } = await supabase
    .from("experts")
    .insert([userData])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function signup({ email, password }: any) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  const { user } = data;

  const userData = {
    id: user?.id,
    email: user?.email,
    phoneNumber: user?.phone,
    role: user?.role,
  };

  createStore(userData);

  return data;
}

export async function login({ email, password }: any) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return user;
}
