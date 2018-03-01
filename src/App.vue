<template>
  <div id="app">
    <div class="content-bg-wrap">
      <div class="content-bg"></div>
    </div>


    <!-- Header Standard -->

    <div class="header--standard header--standard-dark header--standard-landing" id="header--standard">
      <div class="container">
        <div class="header--standard-wrap">
          <a href="02-ProfilePage.html" class="logo">
            <div class="img-wrap">
              <img src="@/assets/img/logo-colored-small.png" alt="Olympus">
            </div>
            <div class="title-block">
              <h6 class="logo-title">olympus</h6>
              <div class="sub-title">SOCIAL NETWORK</div>
            </div>
          </a>

          <a href="#" class="open-responsive-menu js-open-responsive-menu">
            <svg class="olymp-menu-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-menu-icon"></use></svg>
          </a>

          <div class="nav nav-pills nav1 header-menu">
            <div class="mCustomScrollbar">
              <ul>
                <li class="nav-item">
                  <a href="#" class="nav-link">Home</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-hover="dropdown" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false" tabindex='1'>Profile</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Profile Page</a>
                    <a class="dropdown-item" href="#">Newsfeed</a>
                    <a class="dropdown-item" href="#">Post Versions</a>
                  </div>
                </li>
                <li class="nav-item dropdown dropdown-has-megamenu">
                  <a href="#" class="nav-link dropdown-toggle" data-hover="dropdown" data-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="false" tabindex='1'>Forums</a>
                  <div class="dropdown-menu megamenu">
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="column-tittle">Main Links</h6>
                        <a class="dropdown-item" href="#">Profile Page<span class="tag-label bg-blue-light">new</span></a>
                        <a class="dropdown-item" href="#">Profile Page</a>
                        <a class="dropdown-item" href="#">Profile Page</a>
                        <a class="dropdown-item" href="#">Profile Page</a>
                        <a class="dropdown-item" href="#">Profile Page</a>
                        <a class="dropdown-item" href="#">Profile Page</a>
                      </div>
                      <div class="col-sm-3">
                        <h6 class="column-tittle">BuddyPress</h6>
                        <a class="dropdown-item" href="#">Profile Page</a>
                        <a class="dropdown-item" href="#">Profile Page</a>
                        <a class="dropdown-item" href="#">Profile Page<span class="tag-label bg-primary">HOT!</span></a>
                        <a class="dropdown-item" href="#">Profile Page</a>
                        <a class="dropdown-item" href="#">Profile Page</a>
                        <a class="dropdown-item" href="#">Profile Page</a>
                      </div>
                      <div class="col-sm-3">
                        <h6 class="column-tittle">Corporate</h6>
                        <a class="dropdown-item" href="#">Profile Page</a>
                        <a class="dropdown-item" href="#">Profile Page</a>
                        <a class="dropdown-item" href="#">Profile Page</a>
                        <a class="dropdown-item" href="#">Profile Page</a>
                        <a class="dropdown-item" href="#">Profile Page</a>
                        <a class="dropdown-item" href="#">Profile Page</a>
                      </div>
                      <div class="col-sm-3">
                        <h6 class="column-tittle">Forums</h6>
                        <a class="dropdown-item" href="#">Profile Page</a>
                        <a class="dropdown-item" href="#">Profile Page</a>
                        <a class="dropdown-item" href="#">Profile Page</a>
                        <a class="dropdown-item" href="#">Profile Page</a>
                        <a class="dropdown-item" href="#">Profile Page</a>
                        <a class="dropdown-item" href="#">Profile Page</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Terms & Conditions</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Events</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Privacy Policy</a>
                </li>
                <li class="close-responsive-menu js-close-responsive-menu">
                  <svg class="olymp-close-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ... end Header Standard -->

    <div class="header-spacer--standard"></div>

    <div class="container">
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

              <div slot="content-login">
                <div class="title h6">Login to your Account</div>
                <form class="content">
                  <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">Your Email</label>
                        <input class="form-control" placeholder="" type="email">
                      </div>

                      <div class="form-group label-floating is-empty">
                        <label class="control-label">Your Password</label>
                        <input class="form-control" placeholder="" type="password">
                      </div>

                      <div class="remember">

                        <div class="checkbox">
                          <label>
                            <input name="optionsCheckboxes" type="checkbox"><span class="checkbox-material"><span class="check"></span></span>
                            I accept the <a href="#">Terms and Conditions</a> of the website
                          </label>
                        </div>
                        <a href="#" class="forgot">Forgot my Password</a>
                      </div>

                      <a href="#" class="btn btn-lg btn-primary full-width">Login</a>

                      <div class="or"></div>

                      <a href="#" class="btn btn-lg bg-facebook full-width btn-icon-left"><i class="fab fa-facebook-f" aria-hidden="true"></i>Login with Facebook</a>

                      <a href="#" class="btn btn-lg bg-twitter full-width btn-icon-left"><i class="fab fa-twitter" aria-hidden="true"></i>Login with Twitter</a>


                      <p>Don’t you have an account? <a href="#">Register Now!</a> it’s really simple and you can start enjoing all the benefits!</p>
                    </div>
                  </div>
                </form>
              </div>

              <div slot="content-register">
                <div class="title h6">Register to Olympus</div>
                <form class="content">
                  <div class="row">

                    <div class="col-lg-6 col-md-6">
                      <custom-input v-model="firstName" :label="'First Name'"></custom-input>
                    </div>

                    <div class="col-lg-6 col-md-6">
                      <custom-input v-model="lastName" :label="'Last Name'"></custom-input>
                    </div>

                    <div class="col-xl-12 col-lg-12 col-md-12">
                      <custom-input v-model="email" :label="'Email'"></custom-input>

                      <custom-input v-model="password" :label="'Password'"></custom-input>

                      <div class="form-group date-time-picker label-floating">
                        <label class="control-label">Your Birthday</label>
                        <datepicker v-model="birthdate"></datepicker>
                      </div>

                      <custom-select :options="genderOptions" v-model="gender"></custom-select>

                      <div class="remember">
                        <div class="checkbox">
                          <label>
                            <input name="optionsCheckboxes" type="checkbox">
                            <span class="checkbox-material">
                              <span class="check"></span>
                            </span>
                            I accept the <a href="#">Terms and Conditions</a> of the website
                          </label>
                        </div>
                      </div>

                      <a href="#" class="btn btn-purple btn-lg full-width">Complete Registration!</a>
                    </div>
                  </div>
                </form>
              </div>
            </tabs>

          </div>

          <!-- ... end Login-Registration Form  -->		</div>
        </div>
      </div>
    </div>
  </template>

  <script>
  import customInput from '@/common/customInput.vue'

  export default {

    name: 'app',

    data: () => ({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      birthdate: new Date(),
      genderOptions: {
        ma: 'Male',
        fe: 'Female'
      },
      gender: 'ma'
    }),

    components: {
      customInput
    }
  }
  </script>

  <style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
  @import './assets/sass/main.scss';

  </style>
