import ChinhXacResultDisplay from "@/components/cong-cu-doi-sanh/ChinhXacResultDisplay";
import CumTuResultDisplay from "@/components/cong-cu-doi-sanh/CumTuResultDisplay";
import InputTextarea from "@/components/cong-cu-doi-sanh/InputTextarea";

export default function Page() {
  return (
    <div className="flex flex-col">
      <h1 className="font-black tracking-wide uppercase pb-3 text-3xl">
        Công Cụ Đối Sánh
      </h1>
      <InputTextarea />

      <h2 className="font-bold uppercase pt-6 pb-3 text-2xl tracking-wide">
        Kết quả
      </h2>

      <div className="w-full flex flex-col gap-3">
        {/* Đối sánh cụm từ */}
        <CumTuResultDisplay />
        {/* Đối sanh chính sát */}
        <ChinhXacResultDisplay />
      </div>
    </div>
  );
}
