export default function AddRoom() {
  return (
    <form className="min-h-screen bg-black flex flex-col gap-10 align-middle justify-center text-center p-5">
      <div className="text-4xl font-extrabold text-center hover:text-cyan-100">
        Live streamers connect
      </div>
      <div className="flex justify-center gap-3">
        <input
          name="roomName"
          type="text"
          placeholder="Room name"
          className="input input-bordered w-full max-w-xl text-center"
        />
        <input
          name="personName"
          type="text"
          placeholder="Your name"
          className="input input-bordered w-full max-w-xl text-center"
        />
      </div>
      <div className="flex justify-center align-middle">
        <div className="flex flex-row justify-center align-middle gap-3 w-96">
          <button type="submit" className="btn btn-info w-1/2">
            Create
          </button>
          <a type="submit" className="btn btn-success w-1/2">
            Join
          </a>
        </div>
      </div>
    </form>
  );
}
