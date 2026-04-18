import { useEffect, useRef, useState } from "react";
import Index from "./Index";

const PdfExport = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("Preparing PDF...");

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      // Wait for images & fonts
      setStatus("Loading assets...");
      await (document as any).fonts?.ready;
      const imgs = Array.from(document.images);
      await Promise.all(
        imgs.map((img) =>
          img.complete && img.naturalHeight !== 0
            ? Promise.resolve()
            : new Promise((res) => {
                img.addEventListener("load", res, { once: true });
                img.addEventListener("error", res, { once: true });
              })
        )
      );
      if (cancelled) return;

      setStatus("Generating PDF (this may take a moment)...");
      const html2pdf = (await import("html2pdf.js")).default;
      const el = ref.current;
      if (!el) return;

      await html2pdf()
        .set({
          margin: 0,
          filename: "concrete-vernacular-karachi.pdf",
          image: { type: "jpeg", quality: 0.95 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: "#ffffff",
            windowWidth: 1200,
          },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
          pagebreak: { mode: ["avoid-all", "css", "legacy"] },
        })
        .from(el)
        .save();

      if (!cancelled) setStatus("Download started. You can close this tab.");
    };
    run().catch((e) => {
      console.error(e);
      setStatus("Failed to generate PDF. Check console.");
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 inset-x-0 z-[200] bg-foreground text-background text-center py-3 text-xs uppercase tracking-widest">
        {status}
      </div>
      <div ref={ref} className="pt-12">
        <Index />
      </div>
    </div>
  );
};

export default PdfExport;
