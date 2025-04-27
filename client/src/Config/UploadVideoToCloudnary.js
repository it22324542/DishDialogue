export const uploadMediaToCloudinary = async (media) => {
    if (media) {
      const data = new FormData();
      data.append("file", media);
      data.append("upload_preset", "cloud_video_preset");
      data.append("cloud_name", "ds2xhhbez");
  
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/ds2xhhbez/video/upload",
        {
          method: "post",
          body: data,
        }
      );
      const fileData = await res.json();
      console.log("url : ", fileData);
      return fileData.url.toString();
    } else {
      console.log("error");
    }
  };
  