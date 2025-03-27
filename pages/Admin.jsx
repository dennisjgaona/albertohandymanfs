import React, { useState, useEffect } from "react";
import useAuth from "../src/hooks/useAuth";
import {
  Container,
  Paper,
  Button,
  Avatar,
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Input,
  sliderClasses,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
} from "@mui/material";

import app from "../src/firebase.js";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import GalleryImagesAdmin from "../components/GalleryImagesAdmin.jsx";

export default function Admin() {
  const { logout } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    projectType: "",
    projectName: "",
    beforeAfter: "",
    simProjectType: 1,
  });

  const [image, setImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState(null);

  const handleLogout = () => {
    logout();
  };

  function fileToDataString(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onerror = (error) => reject(error);
      reader.onload = () => resolve(reader.result);
    });
  }

  async function handleImageSelect(e) {
    const selectedImage = e.target.files;
    setImage(selectedImage?.[0]);
    if (!selectedImage) {
      return;
    }
    try {
      const imgURL = await fileToDataString(selectedImage?.[0]);
      setPreview(imgURL);
    } catch (error) {
      console.log(error);
    }
  }

  function checkFormData() {
    if (
      formData.projectType !== "" &&
      formData.projectName !== "" &&
      formData.beforeAfter !== ""
    ) {
      return true;
    } else return false;
  }

  //gallery/gallery_carpenter_roomRepair_after_1.jpeg
  async function handleImageUpload(e) {
    //e.preventDefault();
    const boolCheck = checkFormData();
    if (image && boolCheck) {
      try {
        setUploading(true);
        const storage = getStorage(app);
        const storageRef = ref(
          storage,
          "images/" +
            formData.projectType +
            "_" +
            formData.projectName +
            "_" +
            formData.beforeAfter +
            "_" +
            formData.simProjectType
        );
        await uploadBytes(storageRef, image);
        await getDownloadURL(storageRef)
          .then((url) => {
            //setImageURL(url.toString());
            console.log(url);
            let urlTest = url;
            uploadImageDB(urlTest);
          })

          .catch((error) => {
            switch (error.code) {
              case "storage/object-not-found":
                // File doesn't exist
                alert("File doesn't exist");
                break;
              case "storage/unauthorized":
                // User doesn't have permission to access the object
                alert("User doesnt have permission to access the object");
                break;
              case "storage/canceled":
                // User canceled the upload
                alert("User canceled the upload");
                break;

              // ...

              case "storage/unknown":
                // Unknown error occurred, inspect the server response
                alert("Unknown error, inspect server response");
                break;
            }
          });
      } catch (error) {
        console.log(error);
      } finally {
        setUploading(false);
      }
    }
  }
  //const PORT = process.env.PORT || 5173;
  async function uploadImageDB(urlTest) {
    const imageName =
      "images/" +
      formData.projectType +
      "_" +
      formData.projectName +
      "_" +
      formData.beforeAfter +
      "_" +
      formData.simProjectType;
    const dataToPost = {
      image: urlTest,
      imgName: imageName,
      projectType: formData.projectType,
      projectName: formData.projectName,
      beforeAfter: formData.beforeAfter,
      numPicture: formData.simProjectType,
    };
    console.log(JSON.stringify(dataToPost));

    const response = await fetch("http://localhost:4000/upload-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToPost),
    });

    if (response) {
      //console.log(response.body);
      const data = await response.json();
      console.log(data);
      if (data.status === "ok") {
        alert("Image Uploaded to Database");
        getImagesDB(); // should make upload and display realtime(?)
      } else {
        alert(data.status);
      }
    } else {
      console.log("no response");
    }
  }

  async function getImagesDB() {
    const response = await fetch("http://localhost:4000/get-images", {
      method: "GET",
      headers: {
        "Content-Type": "applications/json",
      },
    });
    if (response) {
      const data = await response.json();
      setGalleryImages(data.data);
      console.log(data);
    }
  }

  useEffect(() => {
    getImagesDB();
  }, []);

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <>
      <div>
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ margin: 20, padding: 10 }}>
            <Typography
              component="h1"
              variant="h4"
              sx={{ textAlign: "center", paddingBottom: "2vh" }}
            >
              Add Photos
            </Typography>
            <form onSubmit={handleImageUpload}>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput type="file" onChange={handleImageSelect} />
              </Button>
              <Box sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}>
                {preview && <img src={preview} style={{ maxWidth: 150 }} />}
                <FormHelperText>Preview</FormHelperText>
              </Box>

              <Box sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}>
                <FormControl fullWidth required>
                  <InputLabel id="select-label">Project Type</InputLabel>
                  <Select
                    labelId="select-label"
                    id="select"
                    value={formData.projectType}
                    label="Project Type"
                    autowidth
                    onChange={(e) => {
                      const updatedType = e.target.value;
                      setFormData({
                        ...formData,
                        projectType: updatedType,
                      });
                    }}
                  >
                    <MenuItem value={"Air Conditioning"}>
                      Air Conditioning
                    </MenuItem>
                    <MenuItem value={"Carpentry"}>Carpentry</MenuItem>
                    <MenuItem value={"Doors"}>Doors</MenuItem>
                    <MenuItem value={"Electrical"}>Electrical</MenuItem>
                    <MenuItem value={"General"}>General</MenuItem>
                    <MenuItem value={"Lights"}>Lights</MenuItem>
                    <MenuItem value={"Plumbing"}>Plumbing</MenuItem>
                    <MenuItem value={"Tiles"}>Tiles</MenuItem>
                    <MenuItem value={"Windows"}>Windows</MenuItem>
                    <MenuItem value={"Caulk"}>Caulk</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                  </Select>
                  <FormHelperText>Escoje el Tipo de Projecto</FormHelperText>
                </FormControl>
              </Box>
              <Box
                component="form"
                sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="outlined-basic"
                  label="Project Name"
                  variant="outlined"
                  value={formData.projectName}
                  onChange={(e) => {
                    const updatedName = e.target.value;
                    setFormData({
                      ...formData,
                      projectName: updatedName,
                    });
                  }}
                />
                <FormHelperText>Entra el Nombre del Projecto</FormHelperText>
              </Box>
              <Box sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}>
                <FormControl fullWidth required>
                  <InputLabel id="select-label">Before/After</InputLabel>
                  <Select
                    labelId="select-label"
                    id="select"
                    value={formData.beforeAfter}
                    label="Before/After"
                    autowidth
                    onChange={(e) => {
                      const updatedTime = e.target.value;
                      setFormData({
                        ...formData,
                        beforeAfter: updatedTime,
                      });
                    }}
                  >
                    <MenuItem value={"Before"}>Before</MenuItem>
                    <MenuItem value={"After"}>After</MenuItem>
                  </Select>
                  <FormHelperText>Despues o Antes de Complecion</FormHelperText>
                </FormControl>
              </Box>
              <Box
                component="form"
                sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="ProjectNum"
                  label="Picture Number"
                  variant="outlined"
                  value={formData.simProjectType}
                  onChange={(e) => {
                    const updatedNum = e.target.value;
                    setFormData({
                      ...formData,
                      simProjectType: updatedNum,
                    });
                  }}
                />
              </Box>
              <Button
                variant="contained"
                sx={{ mt: 1 }}
                type="submit"
                disabled={uploading}
                onClick={handleImageUpload}
              >
                {uploading ? "Uploading" : "Upload Image"}
              </Button>
            </form>
          </Paper>
        </Container>
        <Container>
          <Paper elevation={3} sx={{ margin: 20, padding: 10 }}>
            <Typography
              component="h1"
              variant="h4"
              sx={{ textAlign: "center", paddingBottom: "2vh" }}
            >
              Gallery
            </Typography>
            <GalleryImagesAdmin itemData={galleryImages ? galleryImages : ""} />
          </Paper>
        </Container>
        <div
          style={{
            display: "grid",
            width: "25%",
            margin: "auto",
            paddingBottom: "12vh",
          }}
        >
          <Button variant="contained" onClick={handleLogout} sx={{ mt: 1 }}>
            Logout
          </Button>
        </div>
      </div>
    </>
  );
}
