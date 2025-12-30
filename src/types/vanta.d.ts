declare module "@/libs/three.min" {
  const THREE: unknown;
  export default THREE;
}

declare module "@/libs/vanta.waves.min" {
  interface VantaEffect {
    destroy: () => void;
  }

  interface VantaOptions {
    el: HTMLElement | null;
    THREE: unknown;
    mouseControls?: boolean;
    touchControls?: boolean;
  }

  const WAVES: (options: VantaOptions) => VantaEffect;
  export default WAVES;
}
