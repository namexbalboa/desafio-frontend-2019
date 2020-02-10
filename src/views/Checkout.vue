<template>
    <div>
        <form class="boxProps"  @submit.prevent="showModal = true">
            <b-row>
                <b-col>
                    <label class="labelProps">Nome*</label>
                    <b-input class="inputProps" required/>
                </b-col>
                <b-col>
                    <label class="labelProps">CEP*</label>
                    <b-input 
                        v-model="address.zipcode" class="input-text" ref="zipcode" type="text"
                        @keyup="viaCep"
                        autocomplete="disabled"
                    />
                </b-col>
            </b-row>
            <br/>
            <b-row>
                <b-col cols="6">
                    <label class="labelProps">Email*</label>
                    <b-input type="email" class="inputProps" required/>
                </b-col>
                <b-col cols="4">
                    <label class="labelProps">Endereço*</label>
                    <b-input class="inputProps" name="street" id="street" v-model="address.street" required/>
                </b-col>
                <b-col cols="2">
                    <label class="labelProps">Número*</label>
                    <b-input type="tel" class="inputProps" name="addres-number" id="number" required/>
                </b-col>
            </b-row>
            <br/>
            <b-row>
                <b-col cols="6">
                    <label class="labelProps">CPF*</label>
                    <b-input type="tel" class="inputProps" required/>
                </b-col>
                <b-col cols="3">
                    <label class="labelProps">Complemento</label>
                    <b-input class="inputProps"/>
                </b-col>
                <b-col cols="3">
                    <label class="labelProps">Bairro*</label>
                    <b-input class="inputProps" name="district" id="district" v-model="address.district" required/>
                </b-col>
            </b-row>
            <br/>
            <b-row>
                <b-col cols="3">
                    <label class="labelProps">Dt. Nascimento*</label>
                    <b-input type="tel" class="inputProps" placeholder="dd/mm/yyyy" v-model="dateOfBirth" v-mask="['##/##/####']" required/>
                </b-col>
                <b-col cols="3">
                    <label class="labelProps">Telefone*</label>
                    <b-input type="tel" class="inputProps" required/>
                </b-col>
                <b-col cols="4">
                    <label class="labelProps">Cidade*</label>
                    <b-input class="inputProps" name="city" id="city" v-model="address.city" required/>
                </b-col>
                <b-col cols="2">
                    <label class="labelProps">Estado*</label>
                    <b-input class="inputProps" name="state" id="state" v-model="address.state" required/>
                </b-col>
            </b-row>
            <br/>
            <button v-b-modal.modal-1 id="show-modal" @click="showModal = true" class="submitBtn">
                Concluir compra
            </button>
        </form>

        <b-modal hide-footer hide-title v-show="isModalVisible" @close="closeModal" id="modal-1">
            <div class="mx-auto"  style="width: 200px;">
            <img
            src="@/assets/img/successIcon.png"
            alt="checkout"
            height="150"
            />
            <br/>
            <span class="modalText">Seu cadastro foi solicitado com sucesso!</span>
            <br/>
            <router-link class="modalTextLink" to="/"> voltar para home</router-link>
            </div>
        </b-modal>
        
    </div>
</template>

<script>
import viaCep from '@/api/viaCep';

export default {
  components: {
  },
  data() {
    return {
      isModalVisible: true,
      cep: '',
      dateOfBirth: '',
      address: {
          zipcode: '',
          street: '',
          number: '',
          complement: '',
          district: '',
          city: '',
          state: '',
        }
    };
  },
  methods: {
       showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
    viaCep() {
        let out = this
        out.notfound = false
        if (typeof out.address.zipcode !== 'undefined' && out.address.zipcode.length > 7) {
          viaCep.viaCep(out.address.zipcode).then((response) => {
            out.address = {}
            out.address.zipcode = response.data.cep 
            out.address.street = response.data.logradouro
            out.address.district = response.data.bairro
            out.address.city = response.data.localidade
            out.address.state = response.data.uf
          })
        }
      }
    }
  
};
</script>

<style scoped>
@import "../assets/styles/fonts.scss";

.boxProps {
    margin: 10vh 10vw;
}

.labelProps {
    float: left
}

.inputProps {
    
}

.submitBtn {
  float: right;
  margin-top: 5vh;
  border-radius: 0px;
  background-color: #8E36B7;
  border-width: 0px;
  width: 20vw;
  height: 8vh;
  font-family: 'sansproregular';
  font-size: calc(8px + 0.75vw);
  color: white;
}

.submitBtn:hover  {
  background-color: purple;
}

.modalText {
    font-family: 'sansproregular';
    font-size: calc(14px + 0.75vw);
    text-align: center;
}

.modalTextLink {
    font-family: 'sansprobold';
    font-size: calc(10px + 0.75vw);
    color: purple;
}

</style>
