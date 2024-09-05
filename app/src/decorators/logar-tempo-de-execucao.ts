export function logarTempoDeExecucao(emSegundos: boolean = false) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodoBase = descriptor.value;

    descriptor.value = function (...args: Array<any>) {
      let divisor = 1;
      let unidade = "milisegundos";
      if (emSegundos) {
        divisor = 1000;
        unidade = "segundos";
      }

      const t1 = performance.now();
      const retorno = metodoBase.apply(this, args);
      const t2 = performance.now();
      console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}`);
      retorno;
    };

    return descriptor;
  };
}
