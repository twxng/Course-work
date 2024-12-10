import { useState, useEffect } from "react";
import { Button, Input, Avatar } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css";

const Profile = ({ user, onSave }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({ ...user, avatar: user.avatar || null });
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/");  // Якщо користувача немає, редирект на головну
    }
  }, [navigate, user]);

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        setUserInfo((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    try {
      // Send updated profile to the server
      const response = await axios.put(`http://localhost:5000/api/users/${userInfo.id}`, { ...userInfo, avatar });

      if (response.status === 200) {
        onSave(userInfo);  // Pass updated user data to parent
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error updating profile", error);
    }
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div className="profile-card">
        <div className="profile-avatar-container">
          <Avatar
            src={avatar || userInfo.avatar}
            alt="Avatar"
            sx={{ width: 100, height: 100 }}
          />
          <label htmlFor="avatar-upload" className="avatar-upload-label">
            <PhotoCamera fontSize="large" />
          </label>
          <Input
            id="avatar-upload"
            type="file"
            onChange={handleAvatarChange}
            style={{ display: "none" }}
          />
        </div>
        <div className="profile-info">
          <p>ID: {userInfo.id}</p>
          <p>
            First Name:{" "}
            {isEditing ? (
              <input
                type="text"
                name="firstName"
                value={userInfo.firstName}
                onChange={handleInputChange}
              />
            ) : (
              userInfo.firstName
            )}
          </p>
          <p>
            Last Name:{" "}
            {isEditing ? (
              <input
                type="text"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleInputChange}
              />
            ) : (
              userInfo.lastName
            )}
          </p>
          <p>
            Phone Number:{" "}
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={userInfo.phone}
                onChange={handleInputChange}
              />
            ) : (
              userInfo.phone
            )}
          </p>
          <p>
            Email:{" "}
            {isEditing ? (
              <input
                type="text"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
              />
            ) : (
              userInfo.email
            )}
          </p>
        </div>
        <Button className="profile-edit-btn" onClick={handleEditToggle}>
          {isEditing ? "Save" : "Edit"}
        </Button>
        {isEditing && (
          <Button className="profile-save-btn" onClick={handleSave}>
            Save
          </Button>
        )}
        <Button className="profile-back-btn" onClick={() => navigate("/")}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default Profile;
