export function notificationFor(jobType, plan) {
  const topicCount = plan.items.filter((item) => item.kind === 'topic').length;
  const urgent = plan.items.find((item) => item.kind === 'urgent');
  const cards = plan.items.find((item) => item.kind === 'cards');
  if (jobType === 'morning-plan') {
    const pieces = [];
    if (topicCount) pieces.push(`${topicCount} ${topicCount === 1 ? 'téma' : 'témata'}`);
    if (urgent) pieces.push('1 urgentní téma');
    if (cards) pieces.push('kartičky');
    return {
      title: '🐻‍❄️ Dobré ráno od médi',
      body: pieces.length ? `Dnes tě čeká ${pieces.join(', ')}. Stačí začít prvním malým krokem.` : 'Dnes je plán volnější. I Bear minimum dnes stačí.',
      tag: `morning-${plan.date}`
    };
  }
  if (jobType === 'evening-check-in') return {
    title: '🐻‍❄️ Jemný večerní check-in',
    body: 'Jak to dnes šlo? Označ hotovo, část nebo dnes ne — méďa zbytek přesune laskavě.',
    tag: `evening-${plan.date}`
  };
  return {
    title: '🐻‍❄️ Ještě minutka před spaním',
    body: 'Nemám dnešní check-in. Jedno kliknutí teď pomůže zítřejšímu plánu dýchat.',
    tag: `late-${plan.date}`
  };
}
