<template>
	<div slot="content-login">
		<div class="title h6">Login to your Account</div>
		<form class="content">
			<div class="row">
				<div class="col-xl-12 col-lg-12 col-md-12">

          <custom-input v-model="email" :label="'Email'"></custom-input>

          <custom-input v-model="password" :label="'Password'" :type="'password'"></custom-input>

					<a @click.prevent="login" href="#" class="btn btn-lg btn-primary full-width">Login</a>

          <a href="#" class="forgot">Forgot my Password</a>

					<div class="or"></div>

          <!-- Login with facebook -->
					<a href="#" class="btn btn-lg bg-facebook full-width btn-icon-left"><i class="fab fa-facebook-f" aria-hidden="true"></i>Login with Facebook</a>

          <!-- Login with twitter -->
					<a href="#" class="btn btn-lg bg-twitter full-width btn-icon-left"><i class="fab fa-twitter" aria-hidden="true"></i>Login with Twitter</a>


					<p>Don’t you have an account? <a href="#">Register Now!</a> it’s really simple and you can start enjoing all the benefits!</p>
				</div>
			</div>
		</form>
	</div>
</template>
<script>
export default {

  name: 'LoginForm',

  data: () => ({
    email: '',
    password: ''
  }),

  methods: {

    login() {

    }
  }
}
</script>