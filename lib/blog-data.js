import blogImg from '@/public/BlogImg.png';

export const blogPosts = [
  {
    id: 1,
    category: "THREE.JS",
    filter: "UI/UX",
    ref: "REF: 0X9A2F",
    date: "JAN 24, 2024",
    title: "Architecting Real-time 3D Engines for Web Environments",
    excerpt: "How we optimized vertex processing and shader pipelines to deliver buttery smooth 60FPS experiences on mobile hardware using custom GLSL.",
    slug: "architecting-3d-engines",
    content: `
      <p>Building high-performance 3D engines for the web requires a deep understanding of the GPU pipeline and the constraints of the browser's main thread. At Mahraj Technologies, we've developed a proprietary vertex processing protocol that minimizes draw calls while maintaining geometric fidelity.</p>
      
      <h2>Shader Pipeline Optimization</h2>
      <p>Our team utilized custom GLSL (OpenGL Shading Language) to bypass generic Three.js materials, allowing for direct control over pixel-perfect lighting and shadow calculations. By implementing a tile-based deferred shading architecture, we achieved a sustained 60FPS on mid-range mobile devices.</p>

      <div class="technical-callout">
        <h3>PROTOCOL NOTE: 0X9A2F</h3>
        <p>The transition from CPU-bound calculations to hardware-accelerated vertex shaders resulted in a 40% reduction in thermal throttle events during long-session interactions.</p>
      </div>

      <h2>Web Environment Constraints</h2>
      <p>One of the primary challenges was memory management. Large-scale 3D assets can quickly bloat the browser's heap, leading to crash events. We implemented a 'Neural Node' streaming system that loads high-resolution textures and complex meshes only when they enter the camera frustum, utilizing a least-recently-used (LRU) caching strategy.</p>
    `
  },
  {
    id: 2,
    category: "SCALABILITY",
    filter: "SYSTEMS",
    ref: "REF: 0X8C25",
    date: "JAN 18, 2024",
    title: "Zero-Latency Edge Protocols for Global Distribution",
    excerpt: "Evaluating the trade-offs between eventual consistency and real-time state synchronization in high-traffic enterprise applications.",
    slug: "zero-latency-edge-protocols",
    content: `
      <p>In global-scale applications, the limitation of the speed of light becomes a tangible architectural hurdle. Synchronizing state across distributed nodes without introducing perceived latency requires a radical rethink of traditional database consistency models.</p>

      <h2>The Eventual Consistency Paradox</h2>
      <p>While strict ACID compliance is necessary for financial transactions, most user-state data can benefit from 'Intelligent Eventual Consistency'. Our nodes use a conflict-free replicated data type (CRDT) system that resolve state divergence at the edge, rather than waiting for a central handshake.</p>

      <h2>Global State Synchronization</h2>
      <p>By deploying our protocols on a custom mesh network, we've reduced global round-trip times by an average of 150ms. This enables real-time collaborative environments to feel instantaneous, regardless of the physical distance between collaborators.</p>
    `
  },
  {
    id: 3,
    category: "AI ARCHITECTURE",
    filter: "NEURAL",
    ref: "REF: 0X1D4B",
    date: "JAN 12, 2024",
    title: "Fine-Tuning Transformer Models for Domain Specificity",
    excerpt: "A deep dive into mahraj's proprietary weighting system for neural networks specialized in structural engineering data.",
    slug: "fine-tuning-ai-models",
    content: `
      <p>Generic AI models often struggle with the precision required for heavy industrial applications. Fine-tuning is not just about additional data; it's about the architectural weighting of that data within the neural layers.</p>

      <h2>Structural Engineering Weighting</h2>
      <p>We specialized our transformer blocks by injecting domain-specific constraints during the backpropagation phase. This ensures that the model respects physical laws (like load-bearing limits and material stress points) as hard constraints rather than just statistical suggestions.</p>

      <h2>Inference at Scale</h2>
      <p>Deploying these fine-tuned models requires massive compute power. We've optimized the inference path using kernel fusion and weight quantization, allowing these complex neural builds to run on specialized edge hardware with sub-10ms response times.</p>
    `
  },
  {
    id: 4,
    category: "SECURITY",
    filter: "SYSTEMS",
    ref: "REF: 0X2E5A",
    date: "JAN 05, 2024",
    title: "Post-Quantum Encryption in Distributed Nodes",
    excerpt: "Securing the neural engine against next-generation compute threats using lattice-based cryptographic algorithms.",
    slug: "post-quantum-encryption",
    content: `
       <p>The dawn of quantum computing threatens current RSA and ECC encryption standards. To future-proof our clients' data, we've already begun the transition to post-quantum cryptography (PQC).</p>

       <h2>Lattice-Based Protocols</h2>
       <p>Our security layers now utilize lattice-based cryptography, specifically selected for its resilience against Shor's algorithm. These protocols are implemented at the kernel level of every distributed node in our network.</p>

       <h2>The Quantum Transition Path</h2>
       <p>Migrating legacy data to quantum-resistant standards is a non-trivial task. We have developed 'Dual-Key' protocols that secure data using both classical and quantum-resistant methods simultaneously, ensuring security today and tomorrow.</p>
    `
  },
  {
    id: 5,
    category: "HARDWARE",
    filter: "SYSTEMS",
    ref: "REF: 0X4F9B",
    date: "DEC 28, 2023",
    title: "Mechanical Interfaces: Merging Silicic and Carbon Life",
    excerpt: "How Mahraj is bridging the gap between tactile industrial hardware and virtual neural control systems.",
    slug: "mechanical-interfaces",
    content: `
       <p>The interface between software and heavy machinery is where physical efficiency is won or lost. We are designing low-level driver architectures that treat mechanical components as virtual extensions of the neural network.</p>

       <h2>Tactile Feedback Loops</h2>
       <p>By integrating high-frequency haptic sensors into our industrial control units, we provide operators with a 'sixth sense' of the machine's state. This silicic-carbon bridge allows for precision that was previously impossible with traditional manual controls.</p>

       <h2>Predictive Maintenance Integration</h2>
       <p>Our mechanical interfaces don't just execute commands—they listen. By analyzing vibration and thermal sensor data in real-time, the interface can predict a component failure before it happens, automatically scheduling a maintenance protocol to prevent downtime.</p>
    `
  }
];
