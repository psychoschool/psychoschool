export const addNoopenerNoreferredToRel = (rel: string = '') => {
  let resultRel = rel
  if (!rel.includes('noopener')) {
    resultRel += ' noopener'
  }
  if (!rel.includes('noreferrer')) {
    resultRel += ' noreferrer'
  }
  return resultRel.trim()
}
