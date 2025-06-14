import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Avatar,
  Box,
} from "@mui/material";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "../styles/MyAccount.scss"; // Optional for custom styles
import { updateProfile } from "../features/auth/authActions";

const MyAccount = () => {
//   const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  console.log(user)
  const [userInfo, setUserInfo] = useState(null);
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
    console.log(user, "user in MyAccount component");
  useEffect(() => {
    if (user) {
        setUserInfo(user);
      setUsername(user.username || "");
      setBio(user.bio || "");   
    }
  }, [user]);

  const dispatch = useDispatch();




  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    dispatch(updateProfile({ bio, username }));
    setLoading(false);
    setSuccessMsg("Profile updated successfully!");
        console.log(user, "userInfo in MyAccount component");
    // try {
    //   const response = await axios.put(
    //     "/api/auth/profile",
    //     { bio, username },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   setUserInfo(response.data.user);
    //   setSuccessMsg("Profile updated successfully!");
    // } catch (err) {
    //   console.error("Profile update failed:", err);
    // } finally {
    //   setLoading(false);
    // }
  };

  if (!userInfo) return <CircularProgress />;

  return (
    <Card className="my-account-card" sx={{ maxWidth: 600, margin: "2rem auto", padding: 2, boxShadow: 4 }}>
      <CardContent>
        <Box display="flex" alignItems="center" gap={2} mb={3}>
          <Avatar sx={{ width: 56, height: 56 }}>{user.username?.[0]}</Avatar>
          <Box>
            <Typography variant="h5">{userInfo.name}</Typography>
            <Typography variant="body2" color="textSecondary">{userInfo.email}</Typography>
          </Box>
        </Box>

        <form onSubmit={handleUpdate}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username || user.name || ""}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Bio"
            fullWidth
            multiline
            rows={3}
            margin="normal"
            value={bio || user.bio || ""}
            onChange={(e) => setBio(e.target.value)}
            placeholder={user.bio || "Write something about yourself..."}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            sx={{ mt: 2 }}
            fullWidth
          >
            {loading ? "Updating..." : "Update Profile"}
          </Button>
        </form>

        {successMsg && <Typography color="success.main" sx={{ mt: 2 }}>{successMsg}</Typography>}
      </CardContent>
    </Card>
  );
};

export default MyAccount;
