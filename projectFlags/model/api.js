t = {
    countries: [
        { nameC: 'Brasil', url: 'https://flagcdn.com/16x12/br.png' },
        { nameC: 'Estados Unidos', url: 'https://flagcdn.com/16x12/us.png' },
        { nameC: 'Canadá', url: 'https://flagcdn.com/16x12/ca.png' },
        { nameC: 'Japão', url: 'https://flagcdn.com/16x12/jp.png' },
        { nameC: 'Austrália', url: 'https://flagcdn.com/16x12/au.png' },
        { nameC: 'França', url: 'https://flagcdn.com/16x12/fr.png' },
        { nameC: 'Espanha', url: 'https://flagcdn.com/16x12/es.png' },
        { nameC: 'Alemanha', url: 'https://flagcdn.com/16x12/de.png' },
        { nameC: 'China', url: 'https://flagcdn.com/16x12/cn.png' },
        { nameC: 'Índia', url: 'https://flagcdn.com/16x12/in.png' }
      ],

    async guess() {
        return new Promise((resolve, reject) => {
          const index = Math.floor(Math.random() * this.countries.length);
          const guessObj = {
            countrie: this.countries[index].nameC,
            url: this.countries[index].url,
            index: index
          };
          resolve(guessObj);
        });
      },
      

    async createTeste() {
        const guessResult = await this.guess();
        console.log(guessResult)
    }
};


console.log('GUESS: ',t.guess())
module.exports = {
    countries: [
        { nameC: 'Brasil', url: 'https://flagcdn.com/16x12/br.png' },
        { nameC: 'Estados Unidos', url: 'https://flagcdn.com/16x12/us.png' },
        { nameC: 'Canadá', url: 'https://flagcdn.com/16x12/ca.png' },
        { nameC: 'Japão', url: 'https://flagcdn.com/16x12/jp.png' },
        { nameC: 'Austrália', url: 'https://flagcdn.com/16x12/au.png' },
        { nameC: 'França', url: 'https://flagcdn.com/16x12/fr.png' },
        { nameC: 'Espanha', url: 'https://flagcdn.com/16x12/es.png' },
        { nameC: 'Alemanha', url: 'https://flagcdn.com/16x12/de.png' },
        { nameC: 'China', url: 'https://flagcdn.com/16x12/cn.png' },
        { nameC: 'Índia', url: 'https://flagcdn.com/16x12/in.png' }
      ],

    guess()  {
        const index = Math.floor(Math.random() * this.countries.length)
        return {
            countrie: this.countries[index].nameC,
            url: this.countries[index].url,
            index: index
        }
    },
        
}