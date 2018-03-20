<template>
  <div>
    <div class="title h6">Register to Olympus</div>
    <form class="content">
      <div class="row">

        <div class="col-lg-6 col-md-6">
          <custom-input v-model="form.firstName.val" :label="'First Name'"></custom-input>
        </div>

        <div class="col-lg-6 col-md-6">
          <custom-input v-model="form.lastName.val" :label="'Last Name'"></custom-input>
        </div>

        <div class="col-xl-12 col-lg-12 col-md-12">

          <custom-input v-model="form.email.val" :label="'Email'"></custom-input>

          <custom-input v-model="form.password.val" :label="'Password'"></custom-input>

          <div class="form-group date-time-picker label-floating">
            <label class="control-label">Your Birthday</label>
            <datepicker v-model="form.birthdate.val"></datepicker>
          </div>

          <custom-select :options="genderOptions" v-model="form.gender.val"></custom-select>

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

          <a @click="register" href="#" class="btn btn-purple btn-lg full-width">Complete Registration!</a>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {

  name: 'RegisterForm',

  data() {
    const thisVar = this
    return {
      form: {
        firstName: {
          val: '',
          validate: function() {
            return this.val.length >= 3
          }
        },
        lastName: {
          val: '',
          validate: function() {
            return this.val.length >= 3
          }
        },
        email: {
          val: '',
          validate: function() {
            return this.val.length > 6
          }
        },
        password: {
          val: '',
          validate: function() {
            return this.val.length > 6
          }
        },
        birthdate: new Date(),
        gender: {
          val: 'ma',
          validate: function() {
            return this.val.length !== ''
          }
        }
      },
      confirmPassword: {
        val: '',
        validate: function() {
          return this.val === thisVar.password.val
        }
      },
      genderOptions: {
        ma: 'Male',
        fe: 'Female'
      }
    }
  },

  methods: {

    getPayload() {
      const payload = Object.keys(this.form).reduce((ret, key) => {
        ret[key] = this.form[key].val
        return ret
      }, {})
      return payload
    },

    register() {
      const payload = this.getPayload()
      this.$store.dispatch()
    }
  }
}
</script>