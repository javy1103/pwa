<template>
	<div>
		<div class="row display-flex">
			<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
				<div class="landing-content">
					<h1>Welcome to the Biggest Social Network in the World</h1>
					<p>We are the best and biggest social network with 5 billion active users all around the world. Share you
						thoughts, write blog posts, show your favourite music via Stopify, earn badges and much more!
					</p>
					<a href="#" class="btn btn-md btn-border c-white">Register Now!</a>
				</div>
			</div>

			<div class="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12">

				<!-- Login-Registration Form  -->

				<div class="registration-login-form">

					<tabs :tabs="['login', 'register']">
						<i slot="login" class="fal fa-sign-in"></i>
						<i slot="register" class="fal fa-plus-hexagon"></i>

						<login-form slot="content-login"></login-form>
						<register-form slot="content-register"></register-form>
					</tabs>

				</div>

				<!-- ... end Login-Registration Form  -->		</div>
			</div>
		</div>
	</div>
</template>
<script>
import LoginForm from '@/components/auth/LoginForm'
import RegisterForm from '@/components/auth/RegisterForm'
export default {

  name: 'home-page',

  components: {
    LoginForm,
    RegisterForm
  }
}
</script>
<style lang="scss" scoped>
</style>