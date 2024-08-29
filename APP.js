const numeros = [1,5,2,66,2,50,10,3,4,100]
const numeros_ordenados = [0,2,4,6,8,10,12,14,16,18,20]

function buscar (n, array){
  let tempo = 0
  for(let i = 0; i < array.length; i++){
    tempo++
    if (array[i] == n){
      return [i, tempo]
    }
  }
  return [-1, tempo]
}

function buscar_ordenados (n, array){
    let tempo = 0
    for(let i = 0; i < array.length; i++){
      tempo++
      if (array[i] == n){
        return [i, tempo]
      }
      if (array[i] > n){
          break
      }
    }
    return [-1, tempo]
  }

[posicao, tempo] = buscar_ordenados(3, numeros_ordenados)
console.log(`O elemento buscado está na posição: ${posicao}`)
console.log(`O tempo da busca foi de: ${tempo}`)
