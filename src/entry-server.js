import createApp from './app';

export default ctx => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();
    router.push(ctx.url);
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      if (!matchedComponents) return reject({ code: 404 });
      resolve(app);
    }, reject);
  });
}
