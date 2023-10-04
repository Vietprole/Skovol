; ModuleID = 'probe4.c08df74017962665-cgu.0'
source_filename = "probe4.c08df74017962665-cgu.0"
target datalayout = "e-m:e-p270:32:32-p271:32:32-p272:64:64-i64:64-f80:128-n8:16:32:64-S128"
target triple = "x86_64-unknown-linux-gnu"

@alloc_f6bef874ab3ed05dc0f7d18523b0eb39 = private unnamed_addr constant <{ [75 x i8] }> <{ [75 x i8] c"/rustc/b4e54c6e39984840a04dcd02d14ec8c3574d30e5/library/core/src/num/mod.rs" }>, align 1
@alloc_1128056ed9cda1964d11164e9be6193e = private unnamed_addr constant <{ ptr, [16 x i8] }> <{ ptr @alloc_f6bef874ab3ed05dc0f7d18523b0eb39, [16 x i8] c"K\00\00\00\00\00\00\00w\04\00\00\05\00\00\00" }>, align 8
@str.0 = internal constant [25 x i8] c"attempt to divide by zero"

; probe4::probe
; Function Attrs: nonlazybind uwtable
define void @_ZN6probe45probe17hbd2353e4f95c45a5E() unnamed_addr #0 {
start:
  %0 = call i1 @llvm.expect.i1(i1 false, i1 false)
  br i1 %0, label %panic.i, label %"_ZN4core3num21_$LT$impl$u20$u32$GT$10div_euclid17h76d153059a2eae1bE.exit"

panic.i:                                          ; preds = %start
; call core::panicking::panic
  call void @_ZN4core9panicking5panic17h78eb9cd691eeb3c6E(ptr align 1 @str.0, i64 25, ptr align 8 @alloc_1128056ed9cda1964d11164e9be6193e) #3
  unreachable

"_ZN4core3num21_$LT$impl$u20$u32$GT$10div_euclid17h76d153059a2eae1bE.exit": ; preds = %start
  ret void
}

; Function Attrs: nocallback nofree nosync nounwind willreturn memory(none)
declare i1 @llvm.expect.i1(i1, i1) #1

; core::panicking::panic
; Function Attrs: cold noinline noreturn nonlazybind uwtable
declare void @_ZN4core9panicking5panic17h78eb9cd691eeb3c6E(ptr align 1, i64, ptr align 8) unnamed_addr #2

attributes #0 = { nonlazybind uwtable "probe-stack"="inline-asm" "target-cpu"="x86-64" }
attributes #1 = { nocallback nofree nosync nounwind willreturn memory(none) }
attributes #2 = { cold noinline noreturn nonlazybind uwtable "probe-stack"="inline-asm" "target-cpu"="x86-64" }
attributes #3 = { noreturn }

!llvm.module.flags = !{!0, !1}
!llvm.ident = !{!2}

!0 = !{i32 8, !"PIC Level", i32 2}
!1 = !{i32 2, !"RtLibUseGOT", i32 1}
!2 = !{!"rustc version 1.74.0-nightly (b4e54c6e3 2023-09-11)"}
