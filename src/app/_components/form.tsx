"use client";

export default function Form() {
  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!email.trim() || !message.trim()) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (email.trim().length < 10) {
      alert("Por favor, insira um email válido.");
      return;
    }

    if (message.trim().length < 10) {
      alert("Mensagem muito curta");
      return;
    }

    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbwE2jqDqY_rFXEtoWHNMiFA72NGQEJirTAGr8L5jsbwrtpXQ3c34oIs5PuJT6LmPRrxyA/exec";

    await fetch(scriptUrl, {
      method: "POST",
      body: formData,
    })
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        window.location.reload();
      })
      .catch(() => {
        alert("Ocorreu um erro ao enviar a mensagem.");
      });
  }

  return (
    <>
      <h1 className="mt-8 text-center font-mono text-3xl font-semibold">
        Contate-me!
      </h1>
      <form
        method="POST"
        onSubmit={handleFormSubmit}
        className="mx-auto mt-3 flex w-[500px] flex-col"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
        <textarea
          id="message"
          name="message"
          maxLength={300}
          className="mt-4 block h-[150px] w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Digite sua mensagem"
        />
        <button
          type="submit"
          className="mt-4 rounded border border-gray-400 bg-white px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-100 "
        >
          Enviar
        </button>
      </form>
    </>
  );
}
