import Form from "next/form";

export default function NewVideoMeet() {
  return (
    <Form
      action="/search"
      className="m-auto w-96 flex flex-col justify-center min-h-screen"
    >
      <div className="m-2 py-4 font-bold text-2xl">Новая видеовстреча</div>
      <input
        className="bg-[#2d2d2d] m-2 p-4 rounded-xl h-12 font-bold text-lg"
        name="query"
        placeholder="Ваше имя..."
      />
      <input
        className="bg-[#2d2d2d] m-2 p-4 rounded-xl h-12 font-bold text-lg"
        name="query"
        placeholder="Название встречи..."
      />
      <button
        className="h-14 bg-blue-500 hover:bg-blue-400 m-2 mt-5 font-bold text-xl rounded-lg transition-colors cursor-pointer"
        type="submit"
      >
        Создать и присоединиться
      </button>
    </Form>
  );
}
