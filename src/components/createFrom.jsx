import axios from "axios";

const CreateFrom = () => {
  const createPost = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;
    const badge_text = e.target.badge_text.value;
    const badge_color = e.target.badge_color.value;
    const instructor_name = e.target.instructor_name.value;
    const email = e.target.email.value;
    const data = {
      title,
      description,
      badge_text,
      badge_color,
      instructor_name,
      email,
    };
    console.log(data);
    axios({
      method: "post",
      url: "https://react.microhost.one/api/course",
      data: {
        title: "React professional course",
        description:
          "This course is only for professionals who has react expertise",
        badge_text: "Featured",
        badge_color: "red", // #ff0000
        instructor_name: "Naim",
        email: "naim@microdeft.com",
      },
    });
  };

  return (
    <div className="bg-[#F4F3F0] p-24  w-full">
      <h2 className="text-3xl font-bold">Create Course</h2>

      <form onSubmit={createPost}>
        {/* Form row */}
        <div className=" md:flex gap-4">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <label className="input-group">
              <input
                type="title"
                name="title"
                placeholder="title"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="description"
                name="description"
                placeholder="description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">badge_text</span>
            </label>
            <label className="input-group">
              <input
                type="badge_text"
                name="badge_text"
                placeholder="badge_text"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">badge_color</span>
            </label>
            <label className="input-group">
              <input
                type="badge_color"
                name="badge_color"
                placeholder="badge_color"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">InstructorName</span>
            </label>
            <label className="input-group">
              <input
                type="instructor_name"
                name="instructor_name"
                placeholder="instructor_name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <button className="btn mt-4 btn-block bg-[#D2B48C]">Create Data</button>
      </form>
    </div>
  );
};

export default CreateFrom;
