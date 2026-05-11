export default function Contact() {
  return (
    <section id="contact" className="p-20">

      <h1 className="text-4xl font-bold mb-10">
        Contact
      </h1>

      <form className="flex flex-col gap-5">

        <input
          type="text"
          placeholder="Enter Name"
          className="border p-3"
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="border p-3"
        />

        <textarea
          placeholder="Message"
          className="border p-3"
        ></textarea>

        <button className="bg-blue-500 text-white p-3">
          Send
        </button>

      </form>

    </section>
  );
}