import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const SignupPage = () => {
  return (
    <AuthLayout title="Signup">
      <form action="" method="get">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Full name"
              type="text"
              placeholder="John Doe"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Insert password"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ md: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Create Account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end" sx={{ mt: 1 }}>
            <Typography>You already have an account?</Typography>
            <Link
              component={RouterLink}
              color="inherit"
              to="/auth/signup"
              sx={{ ml: 1 }}
            >
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
