<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <form class="former-top" action="#">
          <div class="elemntoption">
            <div class="left-logo">
              <img src="../assets/logo.png" alt="" class="logo-modal" />
            </div>
            <div class="right-close">
              <img
                src="../assets/close.png"
                alt=""
                class="close"
                @click="$store.commit('modal/hideModal')"
              />
            </div>
          </div>
          <p class="main-form-txt">
            {{ $store.getters["cart/getAllEpisodes"][0].title }}
          </p>
          <div class="bl-entry">
            <p>Ваше прізвище, ім’я, по батькові:</p>
            <input type="text" class="entry" />
          </div>
          <div class="bl-entry">
            <p>Телефон:</p>
            <input type="text" class="entry" placeholder="+38 050 000 00 00" />
          </div>
          <div class="bl-entry">
            <p>Електронна адреса:</p>
            <input type="text" class="entry" placeholder="starwars@mail.com" />
          </div>

          <div class="bl-entry">
            <p>Населений пункт, де Ви зареєстровані:</p>
            <input type="text" class="entry" />
          </div>
          <div class="bl-entry">
            <p class="radio-txt">Ким хочу бути</p>
            <div class="radio">
              <div class="inner-radio">
                <input type="radio" id="zm_radio_one" name="whoiparts" />
                <label for="zm_radio_one">{{
                  $store.getters["cart/getAllEpisodes"][0].characters[0]
                }}</label>
              </div>
              <div class="inner-radio">
                <input type="radio" id="zm_radio_two" name="whoiparts" />
                <label for="zm_radio_two">{{
                  $store.getters["cart/getAllEpisodes"][0].characters[1]
                }}</label>
              </div>
              <div class="inner-radio">
                <input type="radio" id="zm_radio_three" name="whoiparts" />
                <label for="zm_radio_three">{{
                  $store.getters["cart/getAllEpisodes"][0].characters[2]
                }}</label>
              </div>
              <div class="inner-radio">
                <input type="radio" id="zm_radio_four" name="whoiparts" />
                <label for="zm_radio_four">{{
                  $store.getters["cart/getAllEpisodes"][0].characters[3]
                }}</label>
              </div>
            </div>
          </div>
          <div class="bl-entry">
            <p class="radio-txt">
              В якій ролі Ви хотіли би бути?
            </p>
            <div class="radio">
              <div class="inner-radio">
                <input type="radio" id="zm_radio_one" name="whomyroll" />
                <label for="zm_radio_one">
                  Актор
                </label>
              </div>
              <div class="inner-radio">
                <input type="radio" id="zm_radio_two" name="whomyroll" />
                <label for="zm_radio_two">Режисер</label>
              </div>
              <div class="inner-radio">
                <input type="radio" id="zm_radio_three" name="whomyroll" />
                <label for="zm_radio_three">Оператор</label>
              </div>
              <div class="inner-radio">
                <input type="radio" id="zm_radio_four" name="whomyroll" />
                <label for="zm_radio_four">Ніким</label>
              </div>
            </div>
          </div>
          <div class="bl-entry">
            <p>Залиште відгук</p>
            <input type="text" class="entry" />
          </div>
          <button class="form-button-date">Відправити</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModalForm",
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  display: flex;
  height: 775px;
  width: 675px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 33%);
  transition: all 0.3s ease;
  font-family: Mont, sans-serif;
}
.former-top {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Mont, sans-serif;
}
.bl-entry {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px;
}
.bl-entry > p {
  width: 45%;
}
p {
  margin: 0;
}
.entry {
  height: 30px;
  width: 230px;
  border-radius: 15px;
  border: 1px solid #5c068c;
}
.selected {
  height: 30px;
  width: 236px;
  border-radius: 15px;
  border: 1px solid #5c068c;
}
.radio {
  width: 230px;
  display: flex;
  flex-direction: column;
}
.radio-txt {
  margin-right: 5px !important;
}
.checkboxblock {
  width: 236px;
}
.checkboxer > input {
  display: none;
}
.checkboxer {
}
.checkboxer > span {
  height: 8px;
  width: 8px;
  border: 1px solid #5c068c;
  display: inline-block;
  position: relative;
  background-color: white;
  border-radius: 2px;
  padding: 3px;
}
[type="checkbox"]:checked + span:before {
  /* <-- ставим иконку, когда чекбокс включен  */
  content: "\2714";
  position: absolute;
  top: -5px;
  left: 0;
  font-size: 18px;
  color: #5c068c;
}
.main-form-txt {
  font-size: 26px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 35px;
  font-family: revert;
  color: #5c068c;
  text-transform: uppercase;
}
.form-button-date {
  width: 150px;
  height: 35px;
  background: #5c068c;
  border-radius: 10px;
  border: none;
  filter: drop-shadow(1px 5px 5px black);
  font-size: 18px;
  color: white;
  font-weight: 600;
}
.elemntoption {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
}
.close {
  width: 32px;
  height: 32px;
}
.left-logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  height: 100%;
}
.right-close {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 15px;
  width: 50%;
  height: 100%;
}
.logo-modal {
  width: 40px;
  height: 40px;
  margin-left: 15px;
}
</style>
