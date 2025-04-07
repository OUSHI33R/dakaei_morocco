"use client";
import { CreditCard, Wallet } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const paymentMethods = [
  {
    id: "card",
    name: "بطاقة بنكية",
    icon: CreditCard,
    description: "الدفع باستخدام البطاقة البنكية",
  },
  {
    id: "cashplus",
    name: "كاش بلوس",
    icon: Wallet,
    description: "الدفع عن طريق كاش بلوس (قريباً)",
    disabled: true,
  },
];

export function PaymentDialog({ plan }: { plan: any }) {
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [open, setOpen] = useState(false);

  const handlePaymentContinue = () => {
    if (selectedMethod === "card" && plan.paymentLink) {
      window.open(plan.paymentLink, "_blank");
      // Close the dialog after opening the payment link
      setOpen(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(newOpen) => {
        // Safely handle dialog state changes
        try {
          setOpen(newOpen);
        } catch (error) {
          console.error("Dialog state change error:", error);
          // Force reset the dialog state if there's an error
          setTimeout(() => setOpen(false), 100);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          className={`w-full py-2 px-4 rounded-lg transition-colors ${
            plan.popular
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          اختر الخطة
        </Button>
      </DialogTrigger>
      {open && (
        <DialogContent className="sm:max-w-md bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-black">
          <DialogHeader>
            <DialogTitle className="text-right mt-6 ml-4 text-gray-900 dark:text-gray-100">
              اختر طريقة الدفع
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-neutral-800">
              <div className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {plan.name}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {plan.price} درهم
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {" "}
                  / شهرياً
                </span>
              </div>
            </div>

            <RadioGroup
              value={selectedMethod}
              onValueChange={setSelectedMethod}
              className="grid gap-4"
            >
              {paymentMethods.map((method) => (
                <Label
                  key={method.id}
                  className={`flex items-center justify-between cursor-pointer rounded-lg border p-4 transition-colors ${
                    selectedMethod === method.id
                      ? "border-primary bg-primary/10 dark:bg-primary/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50"
                  } ${
                    method.disabled
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-50 dark:hover:bg-neutral-800"
                  }`}
                >
                  <div className="flex-1 text-right">
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {method.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {method.description}
                    </div>
                  </div>
                  <method.icon className="h-6 w-6 ml-4 text-gray-500 dark:text-gray-400" />
                  <RadioGroupItem
                    value={method.id}
                    id={method.id}
                    className="ml-4 border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                    disabled={method.disabled}
                    checked={selectedMethod === method.id}
                  />
                </Label>
              ))}
            </RadioGroup>

            <div>
              <Button
                className="w-full bg-black text-white hover:bg-neutral-800 hover:text-white dark:bg-white dark:text-black"
                onClick={handlePaymentContinue}
              >
                متابعة الدفع
              </Button>
            </div>
          </div>
          <DialogClose asChild>
            <Button className="mt-2 w-full border-black text-black hover:bg-neutral-300 dark:bg-transparent dark:border-white dark:text-white dark:hover:bg-neutral-800">
              إغلاق
            </Button>
          </DialogClose>
        </DialogContent>
      )}
    </Dialog>
  );
}
