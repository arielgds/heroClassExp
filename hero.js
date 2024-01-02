
const hero = {
    name : "",
    exp : 0,
    title : "",
};
hero.name = prompt (`Qual seu nome?`)
hero.exp = prompt (`Qual sua EXP?`)

if (hero.exp > 10000) {
    hero.title = "Radiante"
    console.log(`Olá ${hero.name}!`)
    console.log(`Seu XP é ${hero.exp} e seu titulo é ${hero.title}!`)
} if (hero.exp > 9000 && hero.exp <= 10000) {
    hero.title = "Imortal"
    console.log(`Olá ${hero.name}!`)
    console.log(`Seu XP é ${hero.exp} e seu titulo é ${hero.title}!`)
} if (hero.exp > 8000 && hero.exp <= 9000) {
    hero.title = "Ascendente"
    console.log(`Olá ${hero.name}!`)
    console.log(`Seu XP é ${hero.exp} e seu titulo é ${hero.title}!`)
} if (hero.exp > 7000 && hero.exp <= 8000) {
    hero.title = "Platina"
    console.log(`Olá ${hero.name}!`)
    console.log(`Seu XP é ${hero.exp} e seu titulo é ${hero.title}!`)
} if (hero.exp > 5000 && hero.exp <= 7000) {
    hero.title = "Ouro"
    console.log(`Olá ${hero.name}!`)
    console.log(`Seu XP é ${hero.exp} e seu titulo é ${hero.title}!`)
} if (hero.exp > 2000 && hero.exp <= 5000) {
    hero.title = "Prata"
    console.log(`Olá ${hero.name}!`)
    console.log(`Seu XP é ${hero.exp} e seu titulo é ${hero.title}!`)
} if (hero.exp > 1000 && hero.exp <= 2000) {
    hero.title = "Bronze"
    console.log(`Olá ${hero.name}!`)
    console.log(`Seu XP é ${hero.exp} e seu titulo é ${hero.title}!`)
} if (hero.exp < 1000) {
    hero.title = "Ferro"
    console.log(`Olá ${hero.name}!`)
    console.log(`Seu XP é ${hero.exp} e seu titulo é ${hero.title}!`)
}