class Character {
    constructor(name, sanity) {
        this.name = name
        this.sanity = sanity
    }

    traject(playlist) {
        let NbrChangTaxi = 0
        let RedLightsNumbers = 0

        while(NbrChangTaxi < 30 && this.sanity > 0) {
            playlist[RedLightsNumbers % playlist.length]

            if (musics[0] === 'Wejdene - Anissa') {
                this.sanity -= 1
                NbrChangTaxi += 1
                console.log(this.name + " perd 1 de santé mentale en écoutant Wejdene ")
            }

            RedLightsNumbers++
            console.log(this.name + " a passé un feu rouge ")
            console.log(this.name + " écoute de la musique dans le taxi ")

            if(this.sanity === 0) {
                console.log(this.name + " a explosé dans le taxi ")
                break
            }

            if(RedLightsNumbers === 30) {
                console.log(this.name + " a terminé sa course après avoir passé 30 feux rouges ! ")
                break
            }
        }
    }
}

let John = new Character("John", 10)
console.log(John)

let musics = ["Wejdene - Anissa", "CentralCee - Sprinter", "CentralCee - LetGo", "CentralCee - One up", "CentralCee - Loading"]
console.log(musics)

John.traject(musics)