import LoginForm from "@/components/Forms/LoginForm";

export default function Home() {
  return (
    <main className="flex py-6 md:py-26 h-screen flex-col items-center justify-center bg-slate-300">
        <LoginForm />
    </main>
  );
}
