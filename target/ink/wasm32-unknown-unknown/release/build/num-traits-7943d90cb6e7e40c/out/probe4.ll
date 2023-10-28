; ModuleID = 'probe4.c08df74017962665-cgu.0'
source_filename = "probe4.c08df74017962665-cgu.0"
target datalayout = "e-m:e-p:32:32-p10:8:8-p20:8:8-i64:64-n32:64-S128-ni:1:10:20"
target triple = "wasm32-unknown-unknown"

@alloc_f6bef874ab3ed05dc0f7d18523b0eb39 = private unnamed_addr constant <{ [75 x i8] }> <{ [75 x i8] c"/rustc/b4e54c6e39984840a04dcd02d14ec8c3574d30e5/library/core/src/num/mod.rs" }>, align 1
@alloc_c038166499e5324172b81b86bba67b05 = private unnamed_addr constant <{ ptr, [12 x i8] }> <{ ptr @alloc_f6bef874ab3ed05dc0f7d18523b0eb39, [12 x i8] c"K\00\00\00w\04\00\00\05\00\00\00" }>, align 4
@str.0 = internal constant [25 x i8] c"attempt to divide by zero"

; probe4::probe
; Function Attrs: nounwind
define hidden void @_ZN6probe45probe17hbd2353e4f95c45a5E() unnamed_addr #0 {
start:
  %0 = call i1 @llvm.expect.i1(i1 false, i1 false)
  br i1 %0, label %panic.i, label %"_ZN4core3num21_$LT$impl$u20$u32$GT$10div_euclid17hdb349f0941da2de4E.exit"

panic.i:                                          ; preds = %start
; call core::panicking::panic
  call void @_ZN4core9panicking5panic17hcf609c6d7eac94b0E(ptr align 1 @str.0, i32 25, ptr align 4 @alloc_c038166499e5324172b81b86bba67b05) #3
  unreachable

"_ZN4core3num21_$LT$impl$u20$u32$GT$10div_euclid17hdb349f0941da2de4E.exit": ; preds = %start
  ret void
}

; Function Attrs: nocallback nofree nosync nounwind willreturn memory(none)
declare hidden i1 @llvm.expect.i1(i1, i1) #1

; core::panicking::panic
; Function Attrs: cold noinline noreturn nounwind
declare dso_local void @_ZN4core9panicking5panic17hcf609c6d7eac94b0E(ptr align 1, i32, ptr align 4) unnamed_addr #2

attributes #0 = { nounwind "target-cpu"="mvp" }
attributes #1 = { nocallback nofree nosync nounwind willreturn memory(none) }
attributes #2 = { cold noinline noreturn nounwind "target-cpu"="mvp" }
attributes #3 = { noreturn nounwind }

!llvm.ident = !{!0}

!0 = !{!"rustc version 1.74.0-nightly (b4e54c6e3 2023-09-11)"}
